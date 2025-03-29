<?php


namespace App\Service;

use App\Entity\User;
use GuzzleHttp\Client as GuzzleClient;
use SendinBlue\Client\Configuration;
use SendinBlue\Client\Api\ContactsApi;
use SendinBlue\Client\Api\TransactionalEmailsApi;
use SendinBlue\Client\Model\CreateContact;
use SendinBlue\Client\Model\SendSmtpEmail;

class BrevoMailer
{
    private TransactionalEmailsApi $emailApi;
    private ContactsApi $contactsApi;

    public function __construct(string $apiKey)
    {
        $config = Configuration::getDefaultConfiguration()->setApiKey('api-key', $apiKey);
        $client = new GuzzleClient();

        $this->emailApi = new TransactionalEmailsApi($client, $config);
        $this->contactsApi = new ContactsApi($client, $config);
    }

    public function sendUserWelcomeEmail(User $user): void
    {
        // criar ou atualizar o contato no Brevo, pra poder pegar os dados et usar no tamplate do e-mail
        $contact = new CreateContact([
            'email' => $user->getEmail(),
            'attributes' => [
                'FIRSTNAME' => $user->getFirstName(),
                'LASTNAME' => $user->getLastName(),
                'JOB_TITLE' => $user->getTeam()->getName(),
                'EMAIL' => $user->getEmail(),
                'EXT_ID' => 'changeme@2025!Rz#8x'
            ],
            'updateEnabled' => true,
        ]);

        try {
            $this->contactsApi->createContact($contact);
        } catch (\Exception $e) {
            dump('Erreur création contact: ' . $e->getMessage());
        }

        // Segundo: enviar o e-mail com template (que usa {{ contact.FIRSTNAME }})
        $email = new SendSmtpEmail([
            'to' => [[
                'email' => $user->getEmail(),
            ]],
            'templateId' => 5,
        ]);

        try {
            $this->emailApi->sendTransacEmail($email);
        } catch (\Exception $e) {
            dump('Erreur envoi email: ' . $e->getMessage());
        }
    }
}
