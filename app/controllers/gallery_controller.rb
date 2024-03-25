class GalleryController < ApplicationController

    def show

        @image_filenames = Dir.glob("#{Rails.root}/app/assets/images/gallery/*.jpg")

    end

end
