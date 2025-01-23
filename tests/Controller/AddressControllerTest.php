<?php

namespace App\Tests\Controller;

use App\Entity\Address;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class AddressControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private EntityManagerInterface $manager;
    private EntityRepository $addressRepository;
    private string $path = '/address/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->manager = static::getContainer()->get('doctrine')->getManager();
        $this->addressRepository = $this->manager->getRepository(Address::class);

        foreach ($this->addressRepository->findAll() as $object) {
            $this->manager->remove($object);
        }

        $this->manager->flush();
    }

    public function testIndex(): void
    {
        $this->client->followRedirects();
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Address index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'address[title]' => 'Testing',
            'address[fName]' => 'Testing',
            'address[lName]' => 'Testing',
            'address[streetName]' => 'Testing',
            'address[numberDoor]' => 'Testing',
            'address[postalCode]' => 'Testing',
            'address[city]' => 'Testing',
            'address[country]' => 'Testing',
            'address[user]' => 'Testing',
        ]);

        self::assertResponseRedirects($this->path);

        self::assertSame(1, $this->addressRepository->count([]));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new Address();
        $fixture->setTitle('My Title');
        $fixture->setFName('My Title');
        $fixture->setLName('My Title');
        $fixture->setStreetName('My Title');
        $fixture->setNumberDoor('My Title');
        $fixture->setPostalCode('My Title');
        $fixture->setCity('My Title');
        $fixture->setCountry('My Title');
        $fixture->setUser('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Address');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new Address();
        $fixture->setTitle('Value');
        $fixture->setFName('Value');
        $fixture->setLName('Value');
        $fixture->setStreetName('Value');
        $fixture->setNumberDoor('Value');
        $fixture->setPostalCode('Value');
        $fixture->setCity('Value');
        $fixture->setCountry('Value');
        $fixture->setUser('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'address[title]' => 'Something New',
            'address[fName]' => 'Something New',
            'address[lName]' => 'Something New',
            'address[streetName]' => 'Something New',
            'address[numberDoor]' => 'Something New',
            'address[postalCode]' => 'Something New',
            'address[city]' => 'Something New',
            'address[country]' => 'Something New',
            'address[user]' => 'Something New',
        ]);

        self::assertResponseRedirects('/address/');

        $fixture = $this->addressRepository->findAll();

        self::assertSame('Something New', $fixture[0]->getTitle());
        self::assertSame('Something New', $fixture[0]->getFName());
        self::assertSame('Something New', $fixture[0]->getLName());
        self::assertSame('Something New', $fixture[0]->getStreetName());
        self::assertSame('Something New', $fixture[0]->getNumberDoor());
        self::assertSame('Something New', $fixture[0]->getPostalCode());
        self::assertSame('Something New', $fixture[0]->getCity());
        self::assertSame('Something New', $fixture[0]->getCountry());
        self::assertSame('Something New', $fixture[0]->getUser());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();
        $fixture = new Address();
        $fixture->setTitle('Value');
        $fixture->setFName('Value');
        $fixture->setLName('Value');
        $fixture->setStreetName('Value');
        $fixture->setNumberDoor('Value');
        $fixture->setPostalCode('Value');
        $fixture->setCity('Value');
        $fixture->setCountry('Value');
        $fixture->setUser('Value');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertResponseRedirects('/address/');
        self::assertSame(0, $this->addressRepository->count([]));
    }
}
