<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    public $table = 'customers';
    public $primaryKey = 'customer_id';
    public $timestamps = false;
    protected $guarded = ['customer_id'];
    

    protected $fillable = ['fname','lname',
        'addressline','town','zipcode',
        'phone','imagePath','user_id'
    ];

    //  public function orders(){

    //     return $this->hasMany('App\Models\Order','customer_id');

    // }
}
