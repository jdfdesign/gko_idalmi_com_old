# This migration comes from gko_core (originally 20120824061700)
class AddCounterCacheToLanguages < ActiveRecord::Migration
  def up
    add_column :sites, :languages_count, :integer, :default => 0

    Site.reset_column_information
    Site.find(:all).each do |site|
      Site.update_counters site.id, :languages_count => site.languages.length
    end
  end

  def down
    remove_column :sites, :languages_count
  end
end