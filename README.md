<p align="center">
  <img alt="Henryas UI Logo" src="https://vite.dev/logo.svg" width="60" />
</p>

<h1 align="center">
  henryas-component-ui-react
</h1>

<p align="center">
A React UI component library built with React, TypeScript, Tailwind CSS, and managed using Storybook.
</p>

---

# 🚀 Install henryas-component-ui-react
Install henryas-component-ui-react
```shell
npm i henryas-component-ui-react
```

This library requires you to import CSS files for components to display correctly (including the bundled Tailwind CSS support).


Import Global CSS
Add this line to your project's main file (e.g., main.tsx or App.tsx):

## Demo
Please visit the demo via the following link:
[demo](https://consume-ui-component.vercel.app/).

```shell
https://consume-ui-component.vercel.app/
```
# Example
TypeScript
```shell
import { useState } from "react";
import "henryas-component-ui-react/style.css";
import { Button, Select } from "henryas-component-ui-react";

function App() {
    const [val, setVal] = useState<string[]>(["1"]);
    const mockOptions = [
        { value: "1", label: "Technology" },
        { value: "2", label: "Creative Arts" },
        { value: "3", label: "Business Management" },
        { value: "4", label: "Health & Wellness" },
        { value: "5", label: "Social Sciences" },
        { value: "6", label: "Digital Marketing" },
    ];
  return (
    <div>
      <Button primary className="text-red-500" label="click Me" onClick={() => alert('Hi!')} />

      <Select
              id="category_id"
              name="category_id"
              label="Select Categories"
              options={mockOptions}
              multiple
              value={val}
              onChange={setVal}
              withSearch
              searchwithfilter={false}
              placeholder="Choose some options..."
            />
    </div>
  );
}

```

# Develop Applications
## Install Dependency for development
Install Dependency
```shell
yarn install
```
Run run application storybook
```shell
yarn storybook
```

Build Applications if you have a new component
```shell
yarn build
```

The output will be please on dist and have file like
```shell
index.d.ts
index.js
index.mjs
style.css
```
