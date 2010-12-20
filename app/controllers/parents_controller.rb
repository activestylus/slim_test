class ParentsController < ApplicationController
  
  inherit_resources
  
  def new
    @parent = Parent.new
    @parent.children.build
    new!
  end
end
