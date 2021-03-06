# Radio
A list of items, selectable by radio inputs, where only one is selectable.

## Properties

| Property |  Type  |                           Description                          |
|:--------:|:------:|:--------------------------------------------------------------:|
|   label  | String |            The text to display above the selection.            |
|  options |  Array |    An array of strings representing each possible selection.   |
| default? | Number | The index of the default selected radio input. (Default: None) |
| exportLabel? |  String | A short description which will be used when the form is exported or viewed in a table. |

## Usage
An example form with a radio field.
```json
// forms/example.json

{
    "$schema": "../form-schema.json",
    "id": "example",
    "name": "Example Form",
    "description": "Starter Example Form",
    "items": [
        {
            "type": "radio",
            "label": "What did the robot do?",
            "options": [
                "It climbed.",
                "It was on the mat.",
                "It wasn't on the mat."
            ]
        }
    ]
}
```

## Images
![radio](../img/radio.png ":size=200%")
![radio-default](../img/radio-default.png ":size=200%")
