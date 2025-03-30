<?php
namespace App\Tests\Form;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Component\Form\Test\TypeTestCase;

class UserTypeTest extends TypeTestCase
{
    public function testSubmitValidData(): void
    {
        $formData = [
            'matricule' => '12345',
            'email' => 'test@example.com',
            'password' => [
                'first' => '123456',
                'second' => '123456',
            ],
            'firstName' => 'John',
            'lastName' => 'Doe',
            'birthday' => '2000-01-01',
            'telephone' => '123456789',
            'team' => 'backend', 
            'service' => 'Informatique',
            'nameUser' => 'jdoe',
        ];

        $model = new User();
        $form = $this->factory->create(UserType::class, $model);

        $form->submit($formData);

        $this->assertTrue($form->isSynchronized(), 'Formulário não sincronizado');
        $this->assertTrue($form->isValid(), 'Formulário inválido');

        $this->assertEquals('test@example.com', $model->getEmail());
        $this->assertEquals('John', $model->getFirstName());
        $this->assertEquals('Doe', $model->getLastName());
        $this->assertEquals('123456789', $model->getTelephone());
        $this->assertEquals('Informatique', $model->getService());
        $this->assertEquals('jdoe', $model->getNameUser());
        $this->assertEquals('12345', $model->getMatricule());
        $this->assertEquals(new \DateTime('2000-01-01'), $model->getBirthday());
    }
    public function testSubmitInvalidPassword(): void
{
    $formData = [
        'matricule' => '12345',
        'email' => 'test@example.com',
        'password' => [
            'first' => '123456',
            'second' => 'abcdef', // senha diferente
        ],
        'firstName' => 'John',
        'lastName' => 'Doe',
        'birthday' => '2000-01-01',
        'telephone' => '123456789',
        'team' => 'backend',
        'service' => 'Informatique',
        'nameUser' => 'jdoe',
    ];

    $model = new User();
    $form = $this->factory->create(UserType::class, $model);

    $form->submit($formData);

    $this->assertFalse($form->isValid(), 'O formulário deveria ser inválido por senhas diferentes');
    $this->assertTrue($form->isSynchronized());

    $passwordForm = $form->get('password');

    $this->assertFalse($passwordForm->isValid(), 'O campo de senha deveria estar inválido');
    $this->assertEquals(
        'Le mot de passe et la confirmation doivent correspondre.',
        $passwordForm->getErrors()[0]->getMessage()
    );
}

}
