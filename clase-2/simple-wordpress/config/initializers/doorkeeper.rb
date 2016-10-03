Doorkeeper.configure do
  resource_owner_from_credentials do |routes|
    user = User.find_for_database_authentication(:email => params[:username])
    if user && user.valid_for_authentication? { user.valid_password?(params[:password]) }
      user
    end
  end
end

Doorkeeper.configuration.token_grant_types << "password"