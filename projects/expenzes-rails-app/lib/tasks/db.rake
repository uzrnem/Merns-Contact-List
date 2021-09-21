namespace :db do
	task :release do
		Rake::Task["db:drop"].invoke
		Rake::Task["db:create"].invoke
		Rake::Task["db:migrate"].invoke
		Rake::Task["db:seed"].invoke
	end

	desc "Dumps the database to garage/expense_{today}.dump"
	task :expenze do
    cmd = 'mysqldump -u root -p expense > ~/projects/expenze/garage/expense_"$(date +%F)".sql'
    puts cmd
    exec cmd
	end

	desc "Dumps the database to garage/broking_{today}.dump"
	task :broking do
    cmd = 'mysqldump -u root -p broking > ~/projects/expenze/garage/broking_"$(date +%F)".sql'
    puts cmd
    exec cmd
	end
end
