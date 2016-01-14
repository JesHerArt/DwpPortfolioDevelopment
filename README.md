# Deployment of Web Applications Course
##### _Week 2 Assignment: Your Portfolio, Live to the World!_
Jessica J. Hernandez | Full Sail University | Professor Chris Chapman | 201601-01 Online

## Single-Tier Server Architecture Requirements
* Linux Ubuntu v12.04.5 LTS
* Git v1.7.9.5 
* Apache v2.4.16
* PHP v5.5.30
* MySQL v5.5.46
* Laravel Framework v5.1.25 LTS (where needed)
  * Composer v1.0 needed for Laravel
  * Documentation found at: [https://laravel.com/docs/5.1](https://laravel.com/docs/5.1)

## Version Numbering
* When releasing new versions the pattern to follow is Release Version (dot) Production Release ++ (dot) Staged Release ++. (v##.##.##)
* Each time a new feature is promoted to the staging server increment the Staged Release value by one.
* Each time a Production promotion occurs increment the Production Release Value by one.
* Additionally on Production Promotions reset the Staged Release value to zero.

## Branched Development
* When adding a new feature, use a seperate and unique branch that's not the master branch.
* Once you're new feature is complete and has been thoroughly tested, you can marge this feature branch into the master branch. 
* Commit messages should be straightforward. 
* Make note of issues, if need be.
* Never merge features to the master branch that are incomplete or have bugs. 
* Maintain constant communication with your team about checked out branches or when merging branches to avoid conflicts.
* When new versions are merged to the master branch, let your team know accorindingly.
