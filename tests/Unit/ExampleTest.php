<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $this->assertTrue(true);
    }
    /** @test */
    public function testGetCities()
    {
      $response = $this->getJSON('getCities');

      $response->assertSuccessful();
      $responseObj = json_decode($response->getContent());

      $this->assertEquals($responseObj->status, 0);
      $this->assertEquals(count($responseObj->cities), 3);
    }
    /** @test */
    public function getServiceData()
    {
      $response = $this->getJSON('getServiceData/1');

      $response->assertSuccessful();
      $responseObj = json_decode($response->getContent());

      $this->assertEquals($responseObj->status, 0);
      $this->assertEquals(isset($responseObj->json), true);
      $this->assertEquals(isset($responseObj->contactsForHelp), true);
      $this->assertEquals(isset($responseObj->data), true);
    }

    /** @test */
    public function markInaccurate()
    {
      $response = $this->postJSON('markInaccurate', ["city" => 1, "service" => 1, "comments" => "markInaccurate"]);

      $response->assertSuccessful();
      $responseObj = json_decode($response->getContent());

      $this->assertEquals($responseObj->status, 0);
    }
}
