# Presenter Mandatory Dependencies

**presenter-mandatory-dependencies :**
Presenters must at least contain a "clean/use_case" type dragee

## Examples

Example of incorrect dragees for this rule:

```json
{
    "name": "APresenter",
    "profile": "clean/presenter"
}
```
Example of correct dragees for this rule:

```json
{
    "name": "APresenter",
    "profile": "clean/presenter",
    "depends_on": {
        "AUseCase1": [
            "field"
        ]
    }
},
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
label: string = 'Presenter Mandatory Dependencies';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[presenter-mandatory-dependencies.rule.ts:53](https://github.com/dragee-io/clean-asserter/blob/32155e79e9eb13301bb43f3b60c8ab75b5dc842b/src/rules/presenter-mandatory-dependencies.rule.ts#L53)
