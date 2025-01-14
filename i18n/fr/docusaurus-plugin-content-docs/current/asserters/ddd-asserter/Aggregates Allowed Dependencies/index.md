# Aggregates Allowed Dependencies

**aggregates-allowed-dependencies :**
Aggregates can only have dependencies of types "ddd/value_object", "ddd/entity" and "ddd/event"

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "AService",
    "profile": "ddd/service"
},
{
    "name": "AnAggregate",
    "profile": "ddd/aggregate",
    "depends_on": {
        "AService": [
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
    "name": "AnAggregate",
    "profile": "ddd/aggregate",
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
label: string = 'Aggregates Allowed Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[aggregates-allowed-dependencies.rule.ts:71](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/aggregates-allowed-dependencies.rule.ts#L71)
