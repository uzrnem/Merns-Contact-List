<?php
/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
namespace App\Http\Controllers;

use App\Repositories\ContactRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ContactController extends BaseController
{
  public function __construct() {
    $this->repository = new ContactRepository();
    $this->middleware('auth');
    $this->middleware(function ($request, $next) {
      $this->repository->setUserId(Auth::user()->id);
      return $next($request);
    });
  }
}
