import sys
import os


class Importer:

    def main(self):
        
        self.parse_file()
        self.update_app()

    def parse_file(self):
        
        self.open_csv_file()
        self.proc_header()
        self.proc_data()
        self.file.close()

    def open_csv_file(self):
        
        try:
            self.file = open(sys.argv[1], "rt")
        except:
            print("csv file error")
            quit()

    def read_fields(self):

        line = self.file.readline()
        if not line:
            return None
        line = line.strip()
        fields = line.split(",")

        return fields

    def proc_header(self):

        fields = self.read_fields()
        try:
            assert (fields[0].lower().startswith("title"))
            assert (fields[1].lower().startswith("url"))
        except AssertionError:
            print("bad csv file")
            quit()

        self.tag_names = {}
        for index in range(2, len(fields)):
            self.tag_names[index] = fields[index]

    def proc_data(self):

        self.lines = []
        while True:

            fields = self.read_fields()
            if fields is None:
                break

            url = fields[1]
            name = self.proc_url(url)
            tags = self.proc_tags(fields)
            if tags == "":
                continue

            line = '  "' + name + '":' + '"' + tags + '",'
            self.lines.append(line)

        last_index = len(self.lines) - 1
        last_line = self.lines[last_index] 
        self.lines[last_index] = last_line[:-1]

    def proc_tags(self, fields):

        tags = ""
        for index in range(2, len(fields)):

            if fields[index].strip() == "":
                continue

            if tags != "":
                tags += ","
            tags += self.tag_names[index]

        return tags

    def proc_url(self, url):

        url = url.lower().strip()
        if url.endswith("/"):
            url = url[:-1]

        url = self.cut_end(url, "#overview")
        url = self.cut_end(url, "#gallery")
        url = self.cut_end(url, "-switch")
        url = self.cut_end(url, ".html")

        url = self.cut_number(url)

        name = os.path.basename(url)
        name = name.replace("-", "_")

        return name

    def cut_end(self, text, pattern):

        if text.endswith(pattern):
            text = text[0:-len(pattern)]

        return text

    def cut_number(self, text):

        last = text.split("-")[-1]
        if len(last) > 5 and last.isnumeric():
            return text.rsplit("-", 1)[0]

        return text

    def update_app(self):
        
        self.open_app_files()        
        self.first_line_check_and_copy()
        self.skip_old_data()
        self.write_lines()
        self.copy_rest()
        self.close_and_rotate()
    
    def open_app_files(self):

        self.src_name = sys.argv[2]
        self.tmp_name = sys.argv[2] + ".tmp"
        
        try:
            self.src = open(self.src_name, "rt")
        except:
            print("src file error")
            quit()
        
        try:
            self.tmp = open(self.tmp_name, "w")
        except:
            print("tmp file error")
            quit()
        
    def first_line_check_and_copy(self):

        try:
            line = self.src.readline()
            assert(line)
            line = line.strip()
            assert(line == "tags = {")
             
        except AssertionError:
            print("bad src file")
            quit()
            
        self.tmp.write(line + "\n")
    
    def skip_old_data(self):
        
        while True:
            
            line = self.src.readline()
            assert(line)
            line = line.strip()
            
            if line.startswith("}"):
                break
    
    def write_lines(self):
        
        for line in self.lines:
            self.tmp.write(line + "\n")
        
        self.tmp.write("}\n")
            
    def copy_rest(self):
        
        while True:
            line = self.src.readline()
            if not line:
                break
            self.tmp.write(line)
    
    def close_and_rotate(self):
        
        self.src.close()
        self.tmp.close()

        os.replace(self.tmp_name, self.src_name)
                   

if __name__ == "__main__":
    (Importer()).main()
