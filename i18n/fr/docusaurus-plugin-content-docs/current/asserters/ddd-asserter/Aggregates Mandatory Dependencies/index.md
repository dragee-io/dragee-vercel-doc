# Aggregates Mandatory Dependencies

**aggregates-mandatory-dependencies :**
Aggregates must at least contain a "ddd/entity" type dragee

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "AnAggregate",
    "profile": "ddd/aggregate",
}
```
Example of correct dragees for this rule:

```json
{
    "name": "AnAggregate",
    "profile": "ddd/aggregate",
    "depends_on": {
        "AnEntity": [
            "field"
        ]
    }
},
{
    "name": "AnEntity",
    "profile": "ddd/entity"
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
label: string = 'Aggregates Mandatory Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[aggregates-mandatory-dependencies.rule.ts:53](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/aggregates-mandatory-dependencies.rule.ts#L53)
