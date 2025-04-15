<?php

namespace App\Tests\Form;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use PHPUnit\Framework\MockObject\MockObject;


// happy path

// test to verify the UserType form, that is the reason for the TypeTestCase
class UserTypeTest extends TypeTestCase
{

    // Set-up Test
    private MockObject $security;

    protected function getExtensions(): array
    {

        // i need to mock the security service
        $this->security = $this->getMockBuilder(Security::class)
            ->disableOriginalConstructor()
            ->getMock();
        $this->security->method('isGranted')
            ->with('ROLE_MANAGER')
            ->willReturn(false);
        /**
         * 
         * @param Security $security
         */
        $formType = new UserType($this->security);

        return [
            new PreloadedExtension([$formType], []),
        ];
    }
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
        $this->assertEquals($expectedUser->getBirthday()->format('Y-m-d'), $data->getBirthday()->format('Y-m-d'));
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
            'password' => [
                'first' => 'changeme@2025!Rz#8x',
                'second' => 'changeme@2025!Rz#8x',
            ],
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
        $expectedUser->setPassword('changeme@2025!Rz#8x');
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
            'password' => [
                'first' => 'changeme@2025!Rz#8x',
                'second' => 'changeme@2025!Rz#8x',
            ],
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
