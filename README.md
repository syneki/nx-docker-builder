# Nx Docker Builder

This repository provides a docker image to use with [@nx-tools/nx-docker](https://github.com/gperdomor/nx-tools/tree/master/packages/nx-docker) package

## Version Matrix

### Node 12

|   Image Tag    |  Node Version  | Docker Engine | Buildx | Helm\* |
| :------------: | :------------: | :-----------: | :----: | ------ |
| 12.21.0-alpine | 12.21.0-alpine |    20.10.6    | 0.5.1  | -      |
| 12.22.0-alpine | 12.22.0-alpine |    20.10.6    | 0.5.1  | -      |
| 12.22.1-alpine | 12.22.1-alpine |    20.10.6    | 0.5.1  | 3.5.4  |

> The images are also taged with their corresponding 12-alpine and 12.22-alpine format.
>
> \* Helm support... Helm support is added in special image tag with `-helm` suffix, like 12-alpine-helm, 12.22-alpine-helm or 12.22.1-alpine-helm

### Node 14

|   Image Tag    |  Node Version  | Docker Engine | Buildx | Helm\* |
| :------------: | :------------: | :-----------: | :----: | ------ |
| 14.15.5-alpine | 14.15.5-alpine |    20.10.6    | 0.5.1  | -      |
| 14.16.0-alpine | 14.16.0-alpine |    20.10.6    | 0.5.1  | -      |
| 14.16.1-alpine | 14.16.1-alpine |    20.10.6    | 0.5.1  | 3.5.4  |

> The images are also taged with their corresponding 14-alpine and 14.16-alpine format.
>
> \* Helm support: Helm support is added in special image tag with `-helm` suffix, like 14-alpine-helm, 14.16-alpine-helm or 14.16.1-alpine-helm

### Node 15

|   Image Tag    |  Node Version  | Docker Engine | Buildx | Helm\* |
| :------------: | :------------: | :-----------: | :----: | ------ |
| 15.12.0-alpine | 15.12.0-alpine |    20.10.6    | 0.5.1  | -      |
| 15.13.0-alpine | 15.13.0-alpine |    20.10.6    | 0.5.1  | -      |
| 15.14.0-alpine | 15.14.0-alpine |    20.10.6    | 0.5.1  | 3.5.4  |

> The images are also taged with their corresponding 15-alpine and 15.14-alpine format.
>
> \* Helm support... Helm support is added in special image tag with `-helm` suffix, like 15-alpine-helm, 15.14-alpine-helm or 15.14.0-alpine-helm

### Node 16

|   Image Tag   | Node Version  | Docker Engine | Buildx | Helm\* |
| :-----------: | :-----------: | :-----------: | ------ | ------ |
| 16.0.0-alpine | 16.0.0-alpine |    20.10.6    | 0.5.1  | 3.5.4  |

> The images are also taged with their corresponding 16-alpine and 16.0-alpine format.
>
> \* Helm support... Helm support is added in special image tag with `-helm` suffix, like 16-alpine-helm, 16.0-alpine-helm or 16.0.0-alpine-helm
