require "active_support/core_ext/integer/time"

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # In the development environment your application's code is reloaded any time
  # it changes. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports.
  config.consider_all_requests_local = true

  # Enable server timing
  config.server_timing = true

  # Enable/disable caching. By default caching is disabled.
  # Run rails dev:cache to toggle caching.
  if Rails.root.join("tmp/caching-dev.txt").exist?
    config.cache_store = :memory_store
    config.public_file_server.headers = {
      "Cache-Control" => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false

    config.cache_store = :null_store
  end

  # Store uploaded files on the local file system (see config/storage.yml for options).
  config.active_storage.service = :local

  # JBV - 20220614_0038 - Deactivated >> See at end of file
  # Don't care if the mailer can't send.
  # config.action_mailer.raise_delivery_errors = false
  # config.action_mailer.perform_caching = false

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation = :raise

  # Tell Active Support which deprecation messages to disallow.
  config.active_support.disallowed_deprecation_warnings = []

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Highlight code that triggered database queries in logs.
  config.active_record.verbose_query_logs = true

  # Raises error for missing translations.
  # config.i18n.raise_on_missing_translations = true

  # Annotate rendered view with file names.
  # config.action_view.annotate_rendered_view_with_filenames = true

  # Uncomment if you wish to allow Action Cable access from any origin.
  # config.action_cable.disable_request_forgery_protection = true

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
