<?php

namespace App\Classes;

class Search
{
    public $string = '';

    public $users = [];
    
    public $team = null;

    public function __toString()
    {
        return $this->string . implode(',', $this->users);
    }
}