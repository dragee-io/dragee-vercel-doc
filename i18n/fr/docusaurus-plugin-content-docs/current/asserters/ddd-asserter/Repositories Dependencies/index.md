# Repositories Dependencies

**repositories-dependencies :**
Repositories can only be dependencies of types "ddd/service"

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "ARepository",
    "profile": "ddd/repository"
},
{
    "name": "AValueObject",
    "profile": "ddd/value_object",
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
    "name": "ARepository",
    "profile": "ddd/repository"
},
{
    "name": "AService",
    "profile": "ddd/service",
    "depends_on": {
        "ARepository": [
            "field"
        ]
    }
}
```
```json
{
    "name": "ARepository",
    "profile": "ddd/repository"
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
label: string = 'Repositories Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[repositories-dependencies.rule.ts:55](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/repositories-dependencies.rule.ts#L55)
