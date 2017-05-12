class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render @pokemon.errors.full_messages
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense,
                          :moves, :poke_type, :image_url)
  end
end
