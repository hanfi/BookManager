<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		 $this->call('BooksTableSeeder');
	}

}
class BooksTableSeeder extends Seeder {

    public function run()
    {
        DB::table('books')->delete();

        Book::create(array(
            'id' => 1,
            'isbn' => '9780006479888'
        ));

        Book::create(array(
            'id' => 2,
            'isbn' => '9782266122122'
        ));
    }

}
