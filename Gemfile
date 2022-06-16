source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.3"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem "rack-cors"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

######################################
#                                    #
#  React Estate specific gems ahead  #
#                                    #
######################################

# JBV - 20220613 - Adding e-mail + pwd authentication features
gem "devise"

# JBV - 20220613 - Adding connexion to Sendgrid SMTP services (find out more config in the 'environments.rb' files)
gem "sendgrid-ruby"

#LK - 20220615 - Connect React to Rails API
gem "rack-cors"

group :development, :test do

  # JBV - 20220613 - Adding postgresql DB cleaning features (incl. IDs reset capabilities)
  gem "database_cleaner-active_record"

  # JBV - 20220613 - Adding '.env' file content management
  gem "dotenv-rails"

  # JBV - 20220614 - Adding nice console printing of complex DB objects
  gem "table_print"
end

group :development do

  # JBV - 20220613 - Adding prettier error management (if working with Rails v7+ ?)
  gem "better_errors"
  gem "binding_of_caller"

  # JBV - 20220613 - Adding capability to generate fake though actual-looking data to fill postgresql DB via Rails models
  gem "faker", :git => "https://github.com/faker-ruby/faker.git", :branch => "master"
end

gem "devise-jwt", "~> 0.9.0"
