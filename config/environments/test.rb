require "active_support/core_ext/integer/time"

# The test environment is used exclusively to run your application's
# test suite. You never need to work with it otherwise. Remember that
# your test database is "scratch space" for the test suite and is wiped
# and recreated between test runs. Don't rely on the data there!

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Turn false under Spring and add config.action_view.cache_template_loading = true.
  config.cache_classes = true

  # Eager loading loads your whole application. When running a single test locally,
  # this probably isn't necessary. It's a good idea to do in a continuous integration
  # system, or in some way before deploying your code.
  config.eager_load = ENV["CI"].present?

  # Configure public file server for tests with Cache-Control for performance.
  config.public_file_server.enabled = true
  config.public_file_server.headers = {
    "Cache-Control" => "public, max-age=#{1.hour.to_i}"
  }

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false
  config.cache_store = :null_store

  # Raise exceptions instead of rendering exception templates.
  config.action_dispatch.show_exceptions = false

  # Disable request forgery protection in test environment.
  config.action_controller.allow_forgery_protection = false

  # Store uploaded files on the local file system in a temporary directory.
  config.active_storage.service = :test

  # JBV - 20220614_0038 - Deactivated >> See at end of file
  # config.action_mailer.perform_caching = false
  # Tell Action Mailer not to deliver emails to the real world.
  # The :test delivery method accumulates sent emails in the
  # ActionMailer::Base.deliveries array.
  # config.action_mailer.delivery_method = :test

  # Print deprecation notices to the stderr.
  config.active_support.deprecation = :stderr

  # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation = :raise

  # Tell Active Support which deprecation messages to disallow.
  config.active_support.disallowed_deprecation_warnings = []

  # Raises error for missing translations.
  # config.i18n.raise_on_missing_translations = true

  # Annotate rendered view with file names.
  # config.action_view.annotate_rendered_view_with_filenames = true

  #########################################
  #                                       #
  #  REACT ESTATE Specific Configuration  #
  #                                       #
  #########################################

  # JBV - 20220614_0016 - Will use Puma home page as a base for the mail sending (needed for Devise password recovery to work smoothly) 
  config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

  # JBV - 20220614_0032 - Activating all needed features to effectively send mails (even from DEV)
  config.action_mailer.raise_delivery_errors = true   # will effectively raise delivery errors
  config.action_mailer.perform_caching = false        # Will NOT use fragment caching (detailed usefulness to be digged out)
  config.action_mailer.delivery_method = :smtp        # Will use STMP as default mail sending protocol (see detailed confi below)
  config.action_mailer.perform_deliveries = true      # Will ACTIVATE ACTUAL mail sending (setinng this to "false" will avoid any mail departure)

  # JBV - 20220614_0034 -Adding all necessary SendGrid parameters to enable sending and receiving mails
  ActionMailer::Base.smtp_settings = {
    :user_name => ENV['SENDGRID_LOGIN'],
    :password => ENV['SENDGRID_PWD'],
    :domain => 'monfauxnomdesite.fr',
    :address => 'smtp.sendgrid.net',
    :port => 587,
    :authentication => :plain,
    :enable_starttls_auto => true
  }

end
