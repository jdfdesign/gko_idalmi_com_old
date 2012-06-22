# This migration comes from gko_newsletters (originally 20120507000000)
# This migration comes from gko_newsletters (originally 20120507000000)
class CreateNewsletterSubscriptionsTable < ActiveRecord::Migration
  def change
    unless table_exists?(:newsletter_subscriptions)
      create_table :newsletter_subscribers do |t|
        t.references :site
        t.string :email
        t.timestamps
      end
    end   
  end
  
  def down
    drop_table :newsletter_subscriptions
  end
end