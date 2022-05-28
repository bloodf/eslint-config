# Security Policy

## Reporting a Vulnerability

If you would like to provide a patch, please **do not open a pull request**. Instead, create a commit on your fork of @bloodf/eslint-config and run this command:

```bash
git format-patch HEAD~1..HEAD --stdout > patch.txt
```

It will generate a file called `patch.txt`. Please email a description of the patch along with the patch itself to our dedicated email address mentioned above.