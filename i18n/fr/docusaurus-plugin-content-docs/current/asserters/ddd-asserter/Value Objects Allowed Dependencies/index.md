# Value Objects Allowed Dependencies

**value-object-allowed-dependencies :**
Value Objects can only have dependencies of type "ddd/value_object"

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "AnEvent",
    "profile": "ddd/event"
},
{
    "name": "AValueObject1",
    "profile": "ddd/value_object",
    "depends_on": {
        "AnEvent": [
            "field"
        ]
    }
}
```
Example of correct dragees for this rule:

```json
{
    "name": "AValueObject2",
    "profile": "ddd/value_object"
},
{
    "name": "AValueObject1",
    "profile": "ddd/value_object",
    "depends_on": {
        "AValueObject2": [
            "field"
        ]
    }
}
```

## Variables

### default

```ts
default: object;
```

#### Type declaration

##### handler()

```ts
handler: (dragees) => RuleResult[];
```

###### Parameters

###### dragees

`Dragee`[]

###### Returns

`RuleResult`[]

##### label

```ts
label: string = 'Value Objects Allowed Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[value-object-allowed-dependencies.rule.ts:64](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/value-object-allowed-dependencies.rule.ts#L64)
