# Services Allowed Dependencies

**services-allowed-dependencies :**
Services can only have dependencies of types "ddd/value_object", "ddd/entity", "ddd/repository" and "ddd/command"

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "AnEvent",
    "profile": "ddd/event"
},
{
    "name": "AService",
    "profile": "ddd/service",
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
    "name": "AnEntity",
    "profile": "ddd/entity"
},
{
    "name": "AService",
    "profile": "ddd/service",
    "depends_on": {
        "AnEntity": [
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
label: string = 'Services Allowed Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[services-allowed-dependencies.rule.ts:79](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/services-allowed-dependencies.rule.ts#L79)
