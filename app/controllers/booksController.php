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
        $books = Book::all();
        $url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
        $response = [];
        foreach($books as $book){
            $httpResponse = \Httpful\Request::get($url.$book->isbn)->send();
            $resp= $httpResponse->body->items;
            $push = array(
                "id" => $book->id,
                "isbn" => $book->isbn,
                "details" => $resp[0]->volumeInfo);
            array_push($response, $push);

        }
        return Response::json(["books" => $response],200);

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
        $book->isbn =  Input::get('isbn');
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
