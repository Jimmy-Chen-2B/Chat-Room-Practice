class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  def self.generate
    first_name = ["Ben", "John", "Steve", "Jimmy", "Chris"]
    last_name = ["Yoshi", "Biden", "Trump", "Linkin", "Waston"]
    number = rand.to_s[2..4]
    username = "#{first_name.sample}-#{last_name.sample}-#{number}"

    create(username: username)

  end
end
