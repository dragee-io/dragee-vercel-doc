# Factories Allowed Dependencies

**factories-allowed-dependencies :**
Factories can only have dependencies of types "ddd/value_object", "ddd/entity" and "ddd/aggregate"

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "ARepository",
    "profile": "ddd/repository"
},
{
    "name": "AFactory",
    "profile": "ddd/factory",
    "depends_on": {
        "ARepository": [
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
    "name": "AFactory",
    "profile": "ddd/factory",
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
label: string = 'Factories Allowed Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[factories-allowed-dependencies.rule.ts:71](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/factories-allowed-dependencies.rule.ts#L71)
