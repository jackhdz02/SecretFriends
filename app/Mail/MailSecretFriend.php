<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailSecretFriend extends Mailable
{
    use Queueable, SerializesModels;
    public $secretFriend;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->secretFriend = $secretFriend;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.secretFriend');
    }
}
