<?php

namespace App\Components\TabsNavigation;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('TabsNavigation:Tabs', template: '@components/TabsNavigation/tabs.html.twig')]
class Tabs
{
    /** @var array<array{label: string, content: string}> */
    public array $tabs = [];

    public string $active = '';

    public function mount(array $tabs): void
    {
        $this->tabs = $tabs;
        $this->active = $tabs[0]['label'];
    }
}
