# Aggregates Size Limits

**aggregates-size-limits :**
Aggregates mustn't contain more tha 3 dependencies to entities

## Examples

Example of incorrect dragees for this rule:

```json
 {
       "name": "AValueObject1",
       "profile": "ddd/entity"
   },
   {
       "name": "AValueObject2",
       "profile": "ddd/entity"
   },
   {
       "name": "AValueObject3",
       "profile": "ddd/entity"
   },
   {
       "name": "AValueObject4",
       "profile": "ddd/entity"
   },
   {
       "name": "AnAggregate",
       "profile": "ddd/aggregate",
       "depends_on": {
           "AValueObject1": ["field"],
           "AValueObject2": ["field"],
           "AValueObject3": ["field"],
           "AValueObject4": ["field"]
       }
   }
```

Example of correct dragees for this rule:

```json
 {
       "name": "AValueObject1",
       "profile": "ddd/entity"
   },
   {
       "name": "AValueObject2",
       "profile": "ddd/entity"
   },
   {
       "name": "AValueObject3",
       "profile": "ddd/entity"
   },
   {
       "name": "AnAggregate",
       "profile": "ddd/aggregate",
       "depends_on": {
           "AValueObject1": ["field"],
           "AValueObject2": ["field"],
           "AValueObject3": ["field"]
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
label: string = 'Aggregates Size Limits';
```

##### severity

```ts
severity: RuleSeverity = RuleSeverity.ERROR;
```

#### Defined in

[aggregates-size-limits.rule.ts:93](https://github.com/dragee-io/ddd-asserter/blob/a316969adc5ce9182bd65e887bdc1c0ebd85d313/src/rules/aggregates-size-limits.rule.ts#L93)
