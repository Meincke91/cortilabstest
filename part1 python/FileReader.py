class FileReader():
	# read from an existing file
	def read_file(self, file_name):
		data = []
		with open(file_name, 'r') as f:
			for line in f:
				data.append(line)

		return data
		
	# append to existing file or create
	def append_to_file(self, file_name, content):
		with open(file_name, 'a') as f:
			f.write(content)