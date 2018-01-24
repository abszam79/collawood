class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :templates]

  def home
  end
end
