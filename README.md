# Symfony Twig Tabs Component

A lightweight **Tabs Navigation component** for Symfony using **Twig Components** and **Stimulus**.

This component allows you to easily create accessible tabs with minimal JavaScript and clean Twig integration.

---

## Requirements

* PHP 8+
* Symfony
* Symfony UX TwigComponent
* Stimulus

---

## Installation

Copy the component files into your Symfony project.

```
src/Components/TabsNavigation/Tabs.php
templates/components/TabsNavigation/tabs.html.twig
assets/controllers/tabs_controller.js
```

Make sure Symfony UX TwigComponent and Stimulus are installed in your project.

---

## Register the Stimulus Controller

If you are using Symfony UX with Stimulus, register the controller.

Register the controller in `assets/controllers/index.js`:

```javascript
import { startStimulusApp } from '@symfony/stimulus-bundle';
import TabsController from './tabs_controller.js'

const app = startStimulusApp();
app.register('tabs', TabsController)
```

---

## Usage

You can use the component directly in your Twig templates.

```twig
<twig:TabsNavigation:Tabs
    :tabs="[
        { label: 'Tab 1', content: 'Content of tab 1' },
        { label: 'Tab 2', content: 'Content of tab 2' },
        { label: 'Tab 3', content: 'Content of tab 3' }
    ]"
/>
```

---

## Example using PHP data

You can also define the tabs in your controller:

```php
$tabs = [
    ['label' => 'Tab 1', 'content' => 'Content of tab 1'],
    ['label' => 'Tab 2', 'content' => 'Content of tab 2'],
    ['label' => 'Tab 3', 'content' => 'Content of tab 3'],
];
```

And pass them to Twig:

```twig
<twig:TabsNavigation:Tabs :tabs="tabs" />
```

---

## Accessibility

The component uses semantic roles:

* `role="tablist"`
* `role="tab"`
* `role="tabpanel"`

This improves accessibility and compatibility with assistive technologies.

---

## License

MIT
