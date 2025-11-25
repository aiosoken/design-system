# CDN Usage Guide

AIO Design System can be used directly from a CDN without any build tools.

## Quick Start

Add these script tags to your HTML file:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AIO Design System - CDN Example</title>

  <!-- Tailwind CSS (required for styling) -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- AIO Design System CSS -->
  <link rel="stylesheet" href="https://unpkg.com/@aiosoken/design-system/lib/styles.css">
</head>
<body>
  <div id="root"></div>

  <!-- React & ReactDOM (peer dependencies) -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

  <!-- AIO Design System -->
  <script src="https://unpkg.com/@aiosoken/design-system"></script>

  <!-- Your app code -->
  <script>
    const { Button, Card, CardHeader, CardTitle, CardContent } = AIODesignSystem;
    const { createElement: h } = React;
    const { createRoot } = ReactDOM;

    function App() {
      return h(Card, null,
        h(CardHeader, null,
          h(CardTitle, null, 'Welcome to AIO Design System')
        ),
        h(CardContent, null,
          h(Button, { onClick: () => alert('Hello!') }, 'Click Me')
        )
      );
    }

    const root = createRoot(document.getElementById('root'));
    root.render(h(App));
  </script>
</body>
</html>
```

## Using JSX with Babel

For a better development experience with JSX:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AIO Design System - JSX Example</title>

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://unpkg.com/@aiosoken/design-system/lib/styles.css">
</head>
<body>
  <div id="root"></div>

  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://unpkg.com/@aiosoken/design-system"></script>

  <script type="text/babel">
    const { Button, Card, CardHeader, CardTitle, CardContent } = AIODesignSystem;
    const { createRoot } = ReactDOM;

    function App() {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Welcome to AIO Design System</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => alert('Hello!')}>
              Click Me
            </Button>
          </CardContent>
        </Card>
      );
    }

    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>
```

## Available CDN URLs

### unpkg
```
https://unpkg.com/@aiosoken/design-system
https://unpkg.com/@aiosoken/design-system@1.0.0
https://unpkg.com/@aiosoken/design-system/lib/styles.css
```

### jsDelivr
```
https://cdn.jsdelivr.net/npm/@aiosoken/design-system
https://cdn.jsdelivr.net/npm/@aiosoken/design-system@1.0.0
https://cdn.jsdelivr.net/npm/@aiosoken/design-system/lib/styles.css
```

## Available Components

All components are available under the global `AIODesignSystem` object:

```javascript
const {
  // Layout
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Separator,

  // Forms
  Button, Input, Textarea, Checkbox, Label, Select,
  RadioGroup, RadioGroupItem, Switch, Slider,

  // Feedback
  Alert, AlertTitle, AlertDescription,
  Badge, Progress, Spinner, Skeleton,

  // Overlays
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  Sheet, Popover, Tooltip, HoverCard,

  // Navigation
  Tabs, TabsList, TabsTrigger, TabsContent,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,

  // Utilities
  cn, // Utility function for className merging
} = AIODesignSystem;
```

## Notes

- **React and ReactDOM are required** as peer dependencies and must be loaded before the AIO Design System script
- **Tailwind CSS is required** for proper styling
- The global bundle size is ~750KB (minified)
- For production applications, we recommend using npm/pnpm with a bundler for better tree-shaking and smaller bundle sizes

## Example: Full Component Showcase

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AIO Design System - Component Showcase</title>

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://unpkg.com/@aiosoken/design-system/lib/styles.css">

  <style>
    body {
      padding: 2rem;
      background: #f9fafb;
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://unpkg.com/@aiosoken/design-system"></script>

  <script type="text/babel">
    const {
      Button, Card, CardHeader, CardTitle, CardContent, CardFooter,
      Input, Label, Badge, Separator, Alert, AlertTitle, AlertDescription
    } = AIODesignSystem;
    const { createRoot } = ReactDOM;
    const { useState } = React;

    function App() {
      const [name, setName] = useState('');

      return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            AIO Design System
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Alert>
              <AlertTitle>Welcome!</AlertTitle>
              <AlertDescription>
                This is a live demo using AIO Design System from CDN.
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  {name && (
                    <Badge>Hello, {name}! 👋</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter style={{ display: 'flex', gap: '0.5rem' }}>
                <Button onClick={() => alert(`Hello, ${name || 'Guest'}!`)}>
                  Submit
                </Button>
                <Button variant="outline" onClick={() => setName('')}>
                  Clear
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    }

    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>
```

## Development vs Production

For development, you can use the non-minified version:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

For production, always use the minified versions as shown in the examples above.
