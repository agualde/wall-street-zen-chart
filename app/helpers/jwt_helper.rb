require 'openssl'

module JwtHelper
  def self.encrypt(data)
    payload = {
      data: data,
    }
    token = JWT.encode payload, rsa_private, 'RS256'
    token
  end

  def self.decrypt(token)
    begin
      decoded_token = JWT.decode token, rsa_public, true, { algorithm: 'RS256' }
      decoded_token[0]['data']
    rescue JWT::ExpiredSignature
      raise 
    rescue JWT::DecodeError
      raise CustomError::InvalidToken
    end
  end

  def self.encrypt_for_one_hour(data)
    payload = {
      data: data,
      exp: Time.now.to_i + 3600 # Expires in 1 hour
    }
    
    token = JWT.encode payload, rsa_private, 'RS256'
    token
  end

  def self.rsa_public
    @rsa_public ||= OpenSSL::PKey::RSA.new(ENV['JWT_RSA_PUBLIC'])
  end

  private

  def self.rsa_private
    @rsa_private ||= OpenSSL::PKey::RSA.new(ENV['JWT_RSA_PRIVATE'])
  end
end
