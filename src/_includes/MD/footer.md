<!-- NOT USED -->
<!-- Can't use variables due to the way I'm access it. Bug? -->

{% set projectPrefix = project %}

{% if projectContent %}
{% set projectPrefix = projectContent %}
{% endif %}

{{projectPrefix.name}}

    {% renderTemplate "md",
    "nkj" %}

All projects are the work of Robert McGovern, 2020-2022. Site V3  
[Email](emailto:{{projectPrefix.name}}), [Website/Blog]({{projectPrefix.name}})

[Background SVG provided by Steve Schoger @ Hero Patterns](http://www.heropatterns.com/)
{% endrenderTemplate %}

<!-- NOT USED -->
