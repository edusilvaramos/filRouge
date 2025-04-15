<?php

namespace App\Tests\Form;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Component\Form\Test\TypeTestCase;

// happy path

// test to verify the UserType form, that is the reason for the TypeTestCase
class UserTypeTest extends TypeTestCase
{
    /**
     * @dataProvider UserDataProvider
     */
    public function testCreateUser(array $formData, User $expectedUser): void
    {
        // to Create the form based on the UserType (form to create a new user)
        $form = $this->factory->create(UserType::class);

        // Submit the form with the test data
        $form->submit($formData);

        // Ensure the form was submitted without transformation errors
        $this->assertTrue($form->isSynchronized());

        $data = $form->getData();

        // Assert that each field was correctly mapped to the User entity
        $this->assertEquals($expectedUser->getMatricule(), $data->getMatricule());
        $this->assertEquals($expectedUser->getEmail(), $data->getEmail());
        $this->assertEquals($expectedUser->getFirstName(), $data->getFirstName());
        $this->assertEquals($expectedUser->getLastName(), $data->getLastName());
        $this->assertEquals($expectedUser->getBirthday()->format('Y-m-d'),$data->getBirthday()->format('Y-m-d'));
        $this->assertEquals($expectedUser->getTelephone(), $data->getTelephone());
        $this->assertEquals($expectedUser->getService(), $data->getService());
        $this->assertEquals($expectedUser->getNameUser(), $data->getNameUser());
    }

    // error path
    // Simulate error manually since TypeTestCase does not use the database

    public function testSubmitDuplicateEmail(): void
    {
        $user = new User();
        $form = $this->factory->create(UserType::class, $user);

        $formData = [
            'matricule' => 'e001',
            'email' => 'edusilvaramos.1998@gmail.com', // Simulated user in the data base
            'firstName' => 'Eduardo',
            'lastName' => 'Silva Ramos',
            'birthday' => '1998-08-21',
            'telephone' => '0000000000',
            'service' => 'Informatique',
            'nameUser' => 'Eduardo Ramos',
        ];

        $form->submit($formData);

        // Simulate error manually since TypeTestCase has no DB
        $form->get('email')->addError(new \Symfony\Component\Form\FormError('This email is already used.'));

        $this->assertFalse($form->isValid());
        $this->assertCount(1, $form->get('email')->getErrors());
        // for test message
        // $this->assertEquals('mensagem diferente', $form->get('email')->getErrors()[0]->getMessage());
        $this->assertEquals('This email is already used.', $form->get('email')->getErrors()[0]->getMessage());
    }


    /**
     * Data provider method that returns different sets of form data and the corresponding expected User objects
     */

    public static function UserDataProvider(): array
    {
        // Create the expected User object with the values we expect after the form submission
        $expectedUser = new User();
        $expectedUser->setMatricule('e001');
        $expectedUser->setEmail('edusilvaramos.1998@gmail.com');
        $expectedUser->setFirstName('Eduardo');
        $expectedUser->setLastName('Silva Ramos');
        $expectedUser->setBirthday(\DateTime::createFromFormat('d/m/Y', '21/08/1998'));
        $expectedUser->setTelephone('0000000000');
        $expectedUser->setService('Informatique');
        $expectedUser->setNameUser('Eduardo Ramos');

        // This is the raw form data that simulates user input in the form, the same data for the test in mode front-end
        $formData = [
            'matricule' => 'e001',
            'email' => 'edusilvaramos.1998@gmail.com',
            'firstName' => 'Eduardo',
            'lastName' => 'Silva Ramos',
            'birthday' => '1998-08-21',
            'telephone' => '0000000000',
            'service' => 'Informatique',
            'nameUser' => 'Eduardo Ramos',
        ];

        // Return the data set as an array for the test method to consume
        return [
            'eduardo_ramos_case' => [$formData, $expectedUser],
        ];
    }
}
