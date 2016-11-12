$(function() {

    $('#pricing-overview').affix({
      offset: {
        top: 200,
      }
    });

    $("#range_34").ionRangeSlider({
        min: 0,
        max: 200000,
        from: 25000,
        from_min: 25000,
        from_max: 200000,
        from_shadow: true,
        grid: true,
        step: 5000,
        onChange: function (data) {
            setTrees(data.from);
        },
    });

    var plan = {
        base_cost: 79,
        tree_count: 25000,
        tree_cost: {
            rate: 0.0053725,
            discount_savings: 0.95,
            discount_count: 100000
        },
        modules: [
            {
                id: 1,
                name: 'Customization',
                cost: 99,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta vel ipsum sed placerat. Cras volutpat finibus orci vitae porta at lorem pulvinar cursus.',
                image: '/img/pricing/module-icon-community.png',
                added: false,
            },
            {
                id: 2,
                name: 'Community',
                cost: 69,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta vel ipsum sed placerat. Cras volutpat finibus orci vitae porta at lorem pulvinar cursus.',
                image: '/img/pricing/module-icon-customization.png',
                added: false,
            }
        ]
    };

    var moduleTemplate = _.template($('#module-template').html());

    var overviewModuleTemplate = _.template($('#module-overview-template').html());

    function moduleCost() {
        var totalModuleCost = plan.base_cost;
        $.each(plan.modules, function(key, module){
            if (module.added) {
                totalModuleCost += module.cost;
            }
        });
        return totalModuleCost;
    }

    function setTrees(treesAdditional) {
        plan.tree_count = treesAdditional;
        setOverviewTrees();
        setOverviewCost();
        setTreeCost();
    }

    function treeCost() {
        var totalTreesCost = 0;
        if (plan.tree_count < plan.tree_cost.discount_count) {
            totalTreesCost = Math.ceil((plan.tree_count - 25000) * plan.tree_cost.rate);
        }
        else {
            totalTreesCost = Math.ceil((plan.tree_count - 25000) * plan.tree_cost.rate * plan.tree_cost.discount_savings);
        }
        return totalTreesCost;
    }

    function setOverviewCost() {
        var totalCost = moduleCost() + treeCost();
        $('#overview-cost').html(Number(totalCost).toLocaleString('en'));
    }

    function setOverviewTrees() {
        var treesCount = plan.tree_count;
        $('#overview-trees').html(Number(treesCount).toLocaleString('en'));
    }

    function setTreeCost() {
        $('#tree-cost').html(treeCost());
    }

    function updateModules() {
        var html = '';
        var $modules = $('.module');
        var modules = plan.modules;
        $.each($modules, function(key, module){
            var $module = $(module);
            if (modules[key].added) {
                $module.addClass('active');
            }
            else {
                $module.removeClass('active');
            }
        });
    }

    function addModules() {
        var html = '';
        $.each(plan.modules, function(key, module){
            html += moduleTemplate(module);
        });
        $('#modules').html(html);
        setEventModule();
    }

    function updateOverviewModules() {
        var html = '';
        $.each(plan.modules, function(key, module){
            html += overviewModuleTemplate(module);
        });
        $('#overview-modules').html(html);
        setEventOverviewModule();
    }

    function toggleModule(id) {
        var foo = _.findWhere(plan.modules, {id: id});
        foo.added = !foo.added;
        updateModules();
        updateOverviewModules();
        setOverviewCost();
    }

    function setEventModule() {
        $('.link-modal').on('click', function(e){
            e.stopImmediatePropagation();
            return false;
        });
        $('.module').on('click', function(e){
            var id = $(e.target).closest('.module').data('id');
            toggleModule(id);
        });
    }
    function setEventOverviewModule() {
        $('.overview-module').on('click', function(e){
            var id = $(e.target).closest('.overview-module').data('id');
            toggleModule(id);
        });
    }

    addModules();
    updateOverviewModules();
    setOverviewCost();
    setOverviewTrees();
    setTreeCost();
});

