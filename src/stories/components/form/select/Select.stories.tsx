import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "components/form/select-dropdown-field",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const mockOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option with icon" },
  { value: "3", label: "Long Long Option 3" },
  { value: "4", label: "Long Long Long Option 4" },
  { value: "5", label: "Long Long Long Long Option 5" },
  { value: "6", label: "Long Long Long Long Long Option 6" },
];

export const Default: StoryObj<typeof Select> = {
  render: (args) => {
    const [val, setVal] = useState<string[]>(["1"]);
    return (
      <div className=" bg-white min-h-[500px]">
        <Select {...args} value={val} onChange={setVal} />
      </div>
    );
  },
  args: {
    id: "sdd1",
    name: "select",
    label: "Label",
    options: mockOptions,
    withSearch: true,
    searchwithfilter: false,
    usePortal: false,
    multiple: false,
    outlined: true,
  },
};
