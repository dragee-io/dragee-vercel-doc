# Commands Allowed Dependencies

**commands-allowed-dependencies :**
Commands can only have dependencies of type "ddd/aggregate"

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "AnEvent",
    "profile": "ddd/event"
},
{
    "name": "ACommand",
    "profile": "ddd/command",
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
    "name": "AnAggregate",
    "profile": "ddd/aggregate"
},
{
    "name": "ACommand",
    "profile": "ddd/command",
    "depends_on": {
        "AnAggregate": [
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
label: string = 'Commands Allowed Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[commands-allowed-dependencies.rule.ts:64](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/commands-allowed-dependencies.rule.ts#L64)
