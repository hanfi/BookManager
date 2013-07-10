<?php

class booksController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
        $books = Book::orderBy('id',"desc")->get();
        foreach($books as $book)
        {
            $book->details = json_decode($book->details)[0];
        }

        return Response::json(["books" => $books->toArray()],200);

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
        $book = new Book;
        $book->isbn = Input::get('isbn') ;
        $url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
        $httpResponse = \Httpful\Request::get($url.Input::get('isbn'))->send();
        $book->details = json_encode($httpResponse->body->items);
        $book->save();
        return Response::json([
                'error' => false,],
            201
        );
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
