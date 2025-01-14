# Use Case Allowed Dependencies

**use-case-allowed-dependencies :**
Use case must not have any dependency of types "clean/presenter" and "clean/controller"

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "APresenter",
    "profile": "clean/presenter"
},
{
    "name": "AUseCase",
    "profile": "clean/use_case",
    "depends_on": {
        "APresenter": [
            "field"
        ]
    }
}
```
```json
{
    "name": "AController",
    "profile": "clean/controller"
},
{
    "name": "AUseCase",
    "profile": "clean/use_case",
    "depends_on": {
        "AController": [
            "field"
        ]
    }
}
```
Example of correct dragees for this rule:

```json
{
    "name": "AUseCase1",
    "profile": "clean/use_case"
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
label: string = 'Use Case Allowed Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[use-case-allowed-dependencies.rule.ts:76](https://github.com/dragee-io/clean-asserter/blob/32155e79e9eb13301bb43f3b60c8ab75b5dc842b/src/rules/use-case-allowed-dependencies.rule.ts#L76)
