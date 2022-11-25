<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use View;
use Storage;
use DB;
use Log;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return View::make('customer.index');
    }

    public function getCustomerAll(Request $request){
        // if ($request->ajax()){
            $customers = Customer::orderBy('customer_id','DESC')->get();
            return response()->json($customers);
         }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
     {
    //     $customer = Customer::create($request->all());
    //     return response()->json($customer);

    $customer = new customer;
        $customer->fname = $request->fname;
        $customer->lname = $request->lname;
        $customer->addressline = $request->addressline; 
        $customer->town = $request->town;
        $customer->zipcode = $request->zipcode;
        $customer->phone = $request->phone;
        
     

        $files = $request->file('uploads');
        $customer->imagePath = 'images/'.$files->getClientOriginalName();
        Storage::put('/public/images/'.$files->getClientOriginalName(),file_get_contents($files));
        $customer->save();
        return response()->json(["success" => "customer created successfully.","customer" => $customer ,"status" => 200]);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        $customers = Customer::orderBy('customer_id','DESC')->get();
        return response()->json($customers);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        $customer = Customer::find($id);
        return response()->json($customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        // if ($request->ajax()) {
            $customer = Customer::find($id);
            $customer = $customer->update($request->all());
             return response()->json($customer);
            // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        $customer = Customer::findOrFail($id);
        $customer->delete();
        // return Redirect::to('/customer')->with('success','Customer deleted!');
        return response()->json(["success" => "customer deleted successfully.", "status" => 200]);
    }
}
