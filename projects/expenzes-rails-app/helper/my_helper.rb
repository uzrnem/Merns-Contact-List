require 'csv'

def getCsvData(file_name)
	csv_text = File.read(Rails.root.join('lib', 'seeds', file_name))
	CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
end