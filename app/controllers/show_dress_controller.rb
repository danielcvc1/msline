class ShowDressController < ApplicationController
 


  def show

    type=params[:type]

    @image_filenames = Dir.glob("#{Rails.root}/app/assets/images/gallery/#{type}*.jpg")


end



end
